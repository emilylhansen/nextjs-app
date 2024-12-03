export const dynamic = "force-static";

export const GET = (request: Request) => {
  return new Response("Hello,API!", {
    status: 200,
  });
};
