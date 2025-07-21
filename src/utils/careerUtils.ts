import { Career, CareerFilters, CareerStats } from '@/types/career';

export function filterCareers(careers: Career[], filters: CareerFilters): Career[] {
  return careers.filter(career => {
    if (filters.category && career.category !== filters.category) return false;
    if (filters.demand && career.demand !== filters.demand) return false;
    if (filters.personalityType && !career.personalityTypes.includes(filters.personalityType)) return false;
    if (filters.remote !== undefined && career.remote !== filters.remote) return false;
    return true;
  });
}

export function sortCareers(careers: Career[], sortBy: string): Career[] {
  const sorted = [...careers];
  
  switch (sortBy) {
    case 'Salary':
      return sorted.sort((a, b) => {
        const aMax = parseInt(a.salaryRange.split(' - $')[1].replace(/,/g, ''));
        const bMax = parseInt(b.salaryRange.split(' - $')[1].replace(/,/g, ''));
        return bMax - aMax;
      });
    case 'Demand':
      const demandOrder = { 'Very High': 4, 'High': 3, 'Medium': 2, 'Low': 1 };
      return sorted.sort((a, b) => demandOrder[b.demand] - demandOrder[a.demand]);
    case 'Growth Rate':
      return sorted.sort((a, b) => {
        const aGrowth = parseInt(a.growthRate.replace(/[^0-9]/g, ''));
        const bGrowth = parseInt(b.growthRate.replace(/[^0-9]/g, ''));
        return bGrowth - aGrowth;
      });
    default: // A-Z
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }
}

export function calculateCareerStats(careers: Career[]): CareerStats {
  const highDemand = careers.filter(c => c.demand === 'High' || c.demand === 'Very High').length;
  const remoteAvailable = careers.filter(c => c.remote).length;
  
  const avgGrowthNum = careers.reduce((sum, career) => {
    const growth = parseInt(career.growthRate.replace(/[^0-9]/g, '')) || 0;
    return sum + growth;
  }, 0) / careers.length;

  return {
    totalCareers: careers.length,
    highDemand,
    remoteAvailable,
    avgGrowth: `+${Math.round(avgGrowthNum)}%`
  };
}

export function getMatchingCareers(careers: Career[], personalityType: string): Career[] {
  return careers.filter(career => career.personalityTypes.includes(personalityType));
}

export function saveCareer(careerId: string) {
  const saved = getSavedCareers();
  if (!saved.includes(careerId)) {
    saved.push(careerId);
    localStorage.setItem('savedCareers', JSON.stringify(saved));
  }
}

export function unsaveCareer(careerId: string) {
  const saved = getSavedCareers();
  const filtered = saved.filter(id => id !== careerId);
  localStorage.setItem('savedCareers', JSON.stringify(filtered));
}

export function getSavedCareers(): string[] {
  const saved = localStorage.getItem('savedCareers');
  return saved ? JSON.parse(saved) : [];
}

export function isCareerSaved(careerId: string): boolean {
  return getSavedCareers().includes(careerId);
}

export function getDemandColor(demand: string): string {
  switch (demand) {
    case 'Very High': return 'text-success';
    case 'High': return 'text-info';
    case 'Medium': return 'text-warning';
    case 'Low': return 'text-muted-foreground';
    default: return 'text-muted-foreground';
  }
}

export function getDemandBadgeVariant(demand: string): 'default' | 'secondary' | 'destructive' | 'outline' {
  switch (demand) {
    case 'Very High': return 'default';
    case 'High': return 'secondary';
    case 'Medium': return 'outline';
    case 'Low': return 'destructive';
    default: return 'outline';
  }
}