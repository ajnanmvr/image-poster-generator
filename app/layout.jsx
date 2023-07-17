import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Custom Poster Generator",
  description:
    "This particular custom poster generator is equipped with an image upload feature, enabling users to personalize their posters with their own images. With a seamless and user-friendly interface, the generator simplifies the process of creating custom posters. Users can effortlessly upload their desired images, which are then processed to optimize their appearance within the poster. The generator offers a diverse range of pre-designed templates and layouts to choose from, each carefully crafted with distinct text and image placement options, background designs, and overall aesthetics. Users can further customize their posters by adding text, selecting font styles, adjusting colors, and arranging elements within the chosen layout. Through a preview function, users can review and make necessary adjustments, ensuring the final design meets their expectations. Once satisfied, users can easily download the finished poster as a high-resolution image file or conveniently print it out for immediate use. This custom poster generator provides individuals with a user-friendly platform to effortlessly create personalized posters by leveraging their own images and applying unique design choices, resulting in visually stunning and customized creations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <p></p>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
