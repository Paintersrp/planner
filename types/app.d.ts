type PlannerParams = { plannerId: string }
type YearParams = PlannerParams & { yearId: string }
type MonthParams = YearParams & { monthId: string }
type DayParams = MonthParams & { dayId: string }
