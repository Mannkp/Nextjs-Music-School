// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs/promises"

type Data = {
  message:string
};



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const jsonData: {customerName:string,message:string,email_id:string}[] = [];
    const fileContent = await fs.readFile("./src/data/CollectedFormData.json" , "utf-8");
    if(fileContent !== '') {
      JSON.parse(fileContent).forEach((element:{customerName:string,message:string,email_id:string}) => {
        jsonData.push(element);
      });
    };
    if(req.body !== '') {
      jsonData.push(req.body);
    };
    // await fs.writeFile("./src/data/CollectedFormData.json", JSON.stringify(jsonData), (err) => {
    //   if (err) throw err;
    //   res.status(200).json({message: 'form data recorded successfully!'});
    //   console.log('File created!');
    // })
    await fs.writeFile('./src/data/CollectedFormData.json', JSON.stringify(jsonData));

    res.status(200).json({ message: "Form data recorded successfully!" });
    
  } catch (error) {
    console.error("Error handling the file:", error);
    res.status(500).json({ message: "An error occurred while saving the data." });
  }
}
