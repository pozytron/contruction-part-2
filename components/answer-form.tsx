"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface AnswerFormProps {
  questionId: number;
  onAnswerSubmit: (answer: {
    content: string;
    author: string;
    date: string;
    votes: number;
  }) => void;
  onCancel: () => void;
}

export function AnswerForm({ questionId, onAnswerSubmit, onCancel }: AnswerFormProps) {
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (content.trim().length < 30) {
      toast({
        title: "Validation Error",
        description: "Answer must be at least 30 characters long",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would be an API call
    const newAnswer = {
      content: content.trim(),
      author: "Current User", // In a real app, this would come from auth
      date: new Date().toISOString().split("T")[0],
      votes: 0,
    };

    onAnswerSubmit(newAnswer);
    setContent("");
    toast({
      title: "Answer submitted",
      description: "Your answer has been posted successfully",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your answer here..."
        className="min-h-[200px]"
      />
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={content.trim().length < 30}>
          Post Answer
        </Button>
      </div>
    </form>
  );
}