import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/data";
import ProductDetailClient from "./ProductDetailClient";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Ürün Bulunamadı" };
  return {
    title: `${product.name} | ${product.category}`,
    description: product.description.slice(0, 155),
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="section-pad pt-12">
      <div className="container-max">
        <ProductDetailClient product={product} />

        {related.length > 0 && (
          <div className="mt-28">
            <SectionHeading
              eyebrow="Benzer Ürünler"
              title="Bu Kategoriden Diğerleri"
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
