import { notFound } from "next/navigation";
import { getServiceBySlug, servicesData } from "@/lib/services-data";
import { ServicePageContent } from "@/components/landing/service-page-content";

export function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePageContent service={service} />;
}
