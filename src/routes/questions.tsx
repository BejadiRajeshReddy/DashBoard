import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MOCK_COMPANIES } from '@/data/mockData'
import { GripVertical, Plus, Download, Sparkles, Trash2 } from 'lucide-react'

export const Route = createFileRoute('/questions')({
  component: QuestionsPage,
})

interface Question {
  id: string
  text: string
  category: 'Opening' | 'Probing' | 'Follow-up'
}

function QuestionsPage() {
  const [selectedCompany, setSelectedCompany] = useState(MOCK_COMPANIES[1].id) // TCS
  const [questions, setQuestions] = useState<Question[]>([
    { id: 'q1', text: 'Given the slight margin expansion this quarter, how much of this was driven by pyramid optimization vs improved pricing?', category: 'Opening' },
    { id: 'q2', text: 'You mentioned a $900M GenAI pipeline. Could you break down what percentage of this is moving from PoC to production?', category: 'Probing' },
    { id: 'q3', text: 'If BFSI demand remains muted for another 2 quarters, what margin levers are left to pull without impacting long-term growth investments?', category: 'Follow-up' },
  ])

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const items = Array.from(questions)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setQuestions(items)
  }

  const addQuestion = () => {
    setQuestions([...questions, { id: `q${Date.now()}`, text: 'New question...', category: 'Probing' }])
  }

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id))
  }

  const updateQuestionText = (id: string, text: string) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, text } : q))
  }

  const updateQuestionCategory = (id: string, category: any) => {
    setQuestions(questions.map(q => q.id === id ? { ...q, category } : q))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink tracking-tight">Question Engine</h1>
          <p className="text-sm text-text-mid mt-1">Generate and organize high-utility questions for management calls.</p>
        </div>
        <div className="flex items-center gap-3">
          <select 
            className="h-9 rounded-sm border border-border bg-canvas px-3 text-sm focus:ring-1 focus:ring-ink min-w-[200px]"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            {MOCK_COMPANIES.map(c => <option key={c.id} value={c.id}>{c.ticker}</option>)}
          </select>
          <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export Pack</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4">
          <Card className="p-4 bg-accent-purple/5 border-accent-purple/20">
            <h3 className="text-sm font-semibold text-ink mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent-purple"/> AI Question Generator
            </h3>
            <p className="text-xs text-text-body mb-4">Based on latest transcript anomalies and peer comparisons, AI suggests asking about:</p>
            <ul className="space-y-3">
              <li className="text-xs text-ink p-2 bg-canvas border border-border rounded-sm hover:border-accent-purple/50 cursor-pointer">
                "How does the aggressive pricing in the mega-deal renewals impact gross margins in H2?"
                <div className="text-accent-purple font-medium mt-1 text-[10px] uppercase tracking-wider">+ Add to pack</div>
              </li>
              <li className="text-xs text-ink p-2 bg-canvas border border-border rounded-sm hover:border-accent-purple/50 cursor-pointer">
                "What is the expected timeline for subcontractor expenses to normalize to historical averages?"
                <div className="text-accent-purple font-medium mt-1 text-[10px] uppercase tracking-wider">+ Add to pack</div>
              </li>
            </ul>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card className="p-6 min-h-[500px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-semibold text-ink uppercase tracking-wider">Current Question Pack</h3>
              <Button size="sm" onClick={addQuestion}><Plus className="w-4 h-4 mr-1"/> Add Blank</Button>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="questions-list">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
                    {questions.map((q, index) => (
                      <Draggable key={q.id} draggableId={q.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={`flex gap-3 items-start p-3 bg-canvas border rounded-md transition-shadow ${snapshot.isDragging ? 'shadow-md border-ink' : 'border-border'}`}
                          >
                            <div {...provided.dragHandleProps} className="mt-2 text-text-mute hover:text-ink cursor-grab">
                              <GripVertical className="w-5 h-5" />
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="flex justify-between items-center">
                                <select 
                                  value={q.category}
                                  onChange={(e) => updateQuestionCategory(q.id, e.target.value)}
                                  className="text-xs font-semibold uppercase tracking-wider bg-border/20 border-transparent rounded px-2 py-1 text-text-mid focus:ring-1 focus:ring-ink outline-none"
                                >
                                  <option value="Opening">Opening</option>
                                  <option value="Probing">Probing</option>
                                  <option value="Follow-up">Follow-up</option>
                                </select>
                                <button onClick={() => removeQuestion(q.id)} className="text-text-mute hover:text-accent-red transition-colors">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                              <textarea
                                value={q.text}
                                onChange={(e) => updateQuestionText(q.id, e.target.value)}
                                className="w-full text-sm text-ink bg-transparent outline-none resize-none min-h-[60px]"
                                placeholder="Type question here..."
                              />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            {questions.length === 0 && (
              <div className="text-center py-12 text-text-mute">
                Pack is empty. Add questions or generate from AI.
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
