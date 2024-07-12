import { getResumeData, notionClient } from "../../../lib/notion";
import { NotionRenderer } from "@notion-render/client";

//Plugins
import hljsPlugin from "@notion-render/hljs-plugin";
import bookmarkPlugin from "@notion-render/bookmark-plugin";

export default async function ResumeComponents() {
  const resumeData = await getResumeData();

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  });

  notionRenderer.use(hljsPlugin({}));
  notionRenderer.use(bookmarkPlugin(undefined));
  const html = await notionRenderer.render(...resumeData.results);

  return (
    <div className="w-full h-full border-t pt-10 mt-10">
      <h3 className="text-3xl">Elasz Zakrzewki</h3>
      <div
        className="text-md mt-4 max-w-3xl h-full leading-9 prose prose-headings:uppercase prose-headings:text-zinc-900 prose-headings:tracking-wide prose-headings:text-zinc-800 prose-invert dark:prose-p:text-zinc-100 prose-p:text-zinc-800"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
