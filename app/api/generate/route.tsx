import { NextResponse } from 'next/server';
import OpenAi from 'openai';

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY
})

const systemPrompt = `You are an expert Tailwind CSS developer. A user will provide you with a low-fidelity wireframe of an application and you will return a single HTML file that uses Tailwind CSS to create the website. Use creative license to make the application more complete. If you need to insert an image use the service placehold.co to create a placeholder image. Respond only with HTML file`

export async function POST(request:Request) {
  const {image} = await request.json()
  
  if (!image){
    return NextResponse.json("No image provided",{ status: 400})
  }
  try{
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      max_tokens: 4096,
      //Provide a prompt to the system
      messages:[
        { role: "system", content: systemPrompt },
        {role: "user", content: [{type: "image_url", image_url: {"url": image}}]}
      ]
    });
    return NextResponse.json(completion)
  }catch(errors){
    console.log(errors.message)
    return NextResponse.json(`Internal server Error ${errors.message}`, {status: 500})
  }

}