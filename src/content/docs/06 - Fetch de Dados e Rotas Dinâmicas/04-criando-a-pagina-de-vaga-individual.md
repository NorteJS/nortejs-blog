---
title: A página de vaga individual
---


Agora que já temos os dados da vaga na nossa página, precisamos construir a UI da página.

## Código da página de vaga individual

```typescript
// app/vagas/[id]/page.tsx

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import JobPostingCard from "./job-posting-card";

async function fetchJob(jobId: string) {
  const res = await fetch(
    `https://vagas-nortejs.vercel.app/api/job-board/jobs/${jobId}`,
  );
  if (!res.ok) return undefined;
  const data = await res.json();
  return data.data;
}

export default async function JobPosting({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const jobId = (await params).id;
  const job = await fetchJob(jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>
      </div>
      <JobPostingCard job={job} />
    </div>
  );
}
```

## Código do componente `<JobPostingCard />`

```typescript
// app/vagas/[id]/job-posting-card.tsx
import { Job } from "@/lib/@types/job-item-types";
import { Card, CardContent, CardHeader } from "../ui/card";
import Link from "next/link";
import { Briefcase, DollarSign, MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { formatCurrency } from "@/lib/format-currency";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

export default function JobPostingCard({ job }: { job: Job }) {
  return (
    <Card className="space-y-4">
      <CardHeader className="flex items-start justify-between ">
        <div className="w-full justify-between flex items-start">
          <div>
            <div className="flex gap-2">
              <h1>{job.title}</h1>
              -
              <span className="text-sm text-muted-foreground flex items-center align-middle space-x-1"><p>Postagem: {new Date(job.created_at).toLocaleDateString()}</p></span>
            </div>
            <p className="text-2xl font-bold">
              Vaga disponenível para{" "}
              <Link
                href={job.company_website || '#'}
              >
                {job.company}
              </Link>
            </p>
          </div>
          <Button variant="destructive">Apagar Vaga</Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground h-5 w-5" />
            <span>{job.city}, {job.state}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="text-muted-foreground h-5 w-5" />
            <div className="flex gap-2">
              <Badge variant={"secondary"}>
                {job.schedule === "full time" ? "Integral" : "Meio período"}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="text-muted-foreground h-5 w-5" />
            <span>{formatCurrency(job.salary)}</span>
          </div>
        </div>
        <Separator />
        <section>
          <h2 className="mb-4 text-xl font-semibold">Descrição da Vaga</h2>
          <p className="text-muted-foreground leading-relaxed">
            {job.description}
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold">Requisitos</h2>
          <p className="text-muted-foreground">{job.requirements}</p>
        </section>
      </CardContent>
    </Card>
  )
}
```
