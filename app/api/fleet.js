import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("vehicles").select("*");
    if (error) return res.status(400).json({ error });
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const { name, status } = req.body;
    const { data, error } = await supabase
      .from("vehicles")
      .insert([{ name, status }]);
    if (error) return res.status(400).json({ error });
    res.status(201).json(data);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
