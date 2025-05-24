import { dbConnect } from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
  // console.log('📩 Received request:', req);
  // return new Response(JSON.stringify({ message: 'Hello from the API!' }),{
  //   status: 200,
  // })
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;
    console.log('📩 Received body:', body)
    if (!name || !email || !message || !phone || !service) {
      console.warn('⚠️ Missing fields:', body)
      return new Response(JSON.stringify({ message: 'Missing fields' }), {
        status: 400,
      });
    }

    await dbConnect();
    console.log('✅ Connected to MongoDB')
    await Contact.create({ name, email, phone, service, message });
    console.log('📝 Document saved:')
    return new Response(JSON.stringify({ message: 'Message received!' }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error saving message' }), {
      status: 500,
    });
  }
}
