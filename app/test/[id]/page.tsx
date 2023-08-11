import { Card } from "@/components/card-react";

const pages = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  value: Math.random(),
  date: new Date().toISOString(),
}));

const getPage = (id: number) => {
  return Promise.resolve(pages.find((page) => page.id === id));
};

export async function generateStaticParams() {
  const fetchedPages = await Promise.resolve(pages);

  return fetchedPages.map((page) => ({
    id: page.id.toString(),
  }));
}

type Params = Awaited<ReturnType<typeof generateStaticParams>>[number];

const TestPage = async ({ params }: { params: Params }) => {
  const { id } = params;
  const { value, date } = (await getPage(Number(id))) || {};

  return (
    <div>
      <Card>
        <h1>Page {id}</h1>
        <p>Value: {value}</p>
        <p>Date: {date}</p>
      </Card>
    </div>
  );
};

export default TestPage;
