"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, ThumbsUp, User } from "lucide-react";
import { notFound } from "next/navigation";
import { AnswerForm } from "@/components/answer-form";
import { AnswerList } from "@/components/answer-list";
import { questionsData } from "@/lib/data";

export default function QuestionPage({ params }: { params: { id: string } }) {
  const [questions, setQuestions] = useState(questionsData);
  const [isAddingAnswer, setIsAddingAnswer] = useState(false);
  
  const question = questions.find(q => q.id === parseInt(params.id));
  
  if (!question) {
    notFound();
  }

  const handleAnswerSubmit = (newAnswer: {
    content: string;
    author: string;
    date: string;
    votes: number;
  }) => {
    const updatedQuestions = questions.map(q => {
      if (q.id === question.id) {
        return {
          ...q,
          answers: [
            ...q.answers,
            {
              id: q.answers.length + 1,
              ...newAnswer,
            },
          ],
        };
      }
      return q;
    });

    setQuestions(updatedQuestions);
    setIsAddingAnswer(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">{question.title}</h1>
              <Badge>{question.category}</Badge>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              <span>{question.author}</span>
              <span>•</span>
              <span>{question.date}</span>
            </div>
          </div>

          <p className="text-foreground/90 whitespace-pre-wrap">{question.description}</p>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <ThumbsUp className="h-4 w-4 mr-2" />
              {question.votes} votes
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              {question.answers.length} answers
            </Button>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{question.answers.length} Answers</h2>
          {!isAddingAnswer && (
            <Button onClick={() => setIsAddingAnswer(true)}>Add Answer</Button>
          )}
        </div>

        {isAddingAnswer && (
          <Card className="p-6">
            <AnswerForm
              questionId={question.id}
              onAnswerSubmit={handleAnswerSubmit}
              onCancel={() => setIsAddingAnswer(false)}
            />
          </Card>
        )}

        <AnswerList answers={question.answers} />
      </div>
    </div>
  );
}