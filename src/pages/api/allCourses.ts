// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

type Data = {
  name: string;
};

export type Course = {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
    image: string;
  };
  
  export type CoursesData = {
    courses: Course[];
  };
  

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
    fs.readFile("./data/music_courses.json", "utf-8", (err, data)=>{
        
        res.status(200).json(JSON.parse(data));
    })
}
