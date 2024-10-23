import BodyLayout from "@/layouts/bodyLayout/bodyLayout";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
    return {
      title: "shop",
      description: "shop section",
    };
  }

export default function  Page(){


    return <BodyLayout>Body</BodyLayout>
}




