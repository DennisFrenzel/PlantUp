import { createClient } from "@supabase/supabase-js";
import { copyFileSync } from "fs";

const supabaseUrl = "";
const supabaseKey = "";
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchUser() {
  // const { error: error2, status: insertStatus } = await supabase
  //   .schema("social_media_schema")
  //   .from("Plant_data")
  //   .insert({
  //     id: 1,
  //     description: "test",
  //   });

  // const { data: data2, error: error1 } = await supabase
  //   .schema("social_media_schema")
  //   .from("Plants")
  //   .upsert({ id: 1, plant_data_id: 1 })
  //   .select();

  const response = await supabase
    .schema("social_media_schema")
    .from("Plant_data")
    .delete()
    .eq("id", 1);

  const { data: data1, error } = await supabase
    .schema("social_media_schema")
    .from("Plant_data")
    .select("*");
  console.log(data1);
}

fetchUser();
