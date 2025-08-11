import { Card, CardContent } from "@/components/ui/card";
import { University } from "../data/types";

interface UniversityStatsCardsProps {
  universities: University[];
}

export default function UniversityStatsCards({ universities }: UniversityStatsCardsProps) {
  const totalUniversities = universities.length;
  const activeUniversities = universities.filter(u => u.status === 'active').length;
  const totalStudents = universities.reduce((sum, u) => sum + u.studentsCount, 0);
  const averageFoundedYear = Math.round(
    universities.reduce((sum, u) => sum + u.foundedYear, 0) / universities.length
  );

  const stats = [
    {
      title: "Total Universidades",
      value: totalUniversities,
      description: `${activeUniversities} activas`,
    },
    {
      title: "Estudiantes Totales",
      value: totalStudents.toLocaleString(),
      description: "Estudiantes registrados",
    },
    {
      title: "Universidades Activas",
      value: activeUniversities,
      description: `${((activeUniversities / totalUniversities) * 100).toFixed(0)}% del total`,
    },
    {
      title: "Año Promedio Fundación",
      value: averageFoundedYear,
      description: "Promedio histórico",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        return (
          <Card key={index} className="border shadow-sm">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
