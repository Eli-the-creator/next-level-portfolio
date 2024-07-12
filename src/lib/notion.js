import "server-only";
import { Client } from "@notionhq/client";
import cache from "react";

export const notionClient = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DB_ID;

export const getResumeData = () => {
  return notionClient.blocks.children
    .list({
      block_id: databaseId,
    })
    .then((res) => res);
};
