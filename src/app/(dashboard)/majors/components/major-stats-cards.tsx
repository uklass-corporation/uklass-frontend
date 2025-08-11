import { Card, CardContent } from "@/components/ui/card";
import { Major } from "../data/types";

interface MajorStatsCardsProps {
  majors: Major[];
}

export default function MajorStatsCards({ majors }: MajorStatsCardsProps) {
  const totalMajors = majors.length;
  const activeMajors = majors.filter(m => m.status === 'active').length;
  const totalStudents = majors.reduce((sum, m) => sum + m.studentsEnrolled, 0);
  const averageDuration = Math.round(
    majors.reduce((sum, m) => sum + m.duration, 0) / majors.length
  );

  const stats = [
    {
      title: "Total Carreras",
      value: totalMajors,
      description: `${activeMajors} activas`,
    },
    {
      title: "Estudiantes Inscritos",
      value: totalStudents.toLocaleString(),
      description: "Total matriculados",
    },
    {
      title: "Carreras Activas",
      value: activeMajors,
      description: `${((activeMajors / totalMajors) * 100).toFixed(0)}% del total`,
    },
    {
      title: "Duración Promedio",
      value: `${averageDuration} años`,
      description: "Tiempo de estudio",
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
