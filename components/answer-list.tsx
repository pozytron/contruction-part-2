import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, User } from "lucide-react";

interface Answer {
  id: number;
  content: string;
  author: string;
  date: string;
  votes: number;
}

interface AnswerListProps {
  answers: Answer[];
}

export function AnswerList({ answers }: AnswerListProps) {
  return (
    <div className="space-y-4">
      {answers.map((answer) => (
        <Card key={answer.id} className="p-6">
          <div className="space-y-4">
            <p className="text-foreground/90 whitespace-pre-wrap">{answer.content}</p>

            <div className="flex items-center justify-between">
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                {answer.votes} votes
              </Button>

              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{answer.author}</span>
                <span>•</span>
                <span>{answer.date}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}