import { questionsData } from "@/lib/data";

export function generateStaticParams() {
  return questionsData.map((question) => ({
    id: question.id.toString(),
  }));
}