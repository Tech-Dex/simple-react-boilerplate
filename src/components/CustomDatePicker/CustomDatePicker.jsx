import { DatePicker, Portal } from "@ark-ui/react";
import "@/components/CustomDatePicker/CustomDatePicker.css";

export const CustomDatePicker = () => {
	return (
		<DatePicker.Root selectionMode='range'>
			<DatePicker.Label>Label</DatePicker.Label>
			<DatePicker.Control>
				<DatePicker.Input index={0} />
				<DatePicker.Input index={1} />
				<DatePicker.Trigger>📅</DatePicker.Trigger>
				<DatePicker.ClearTrigger>Clear</DatePicker.ClearTrigger>
			</DatePicker.Control>
			<DatePicker.PresetTrigger value='last7Days'>Last 7 days</DatePicker.PresetTrigger>
			<Portal>
				<DatePicker.Positioner>
					<DatePicker.Content>
						<DatePicker.YearSelect />
						<DatePicker.MonthSelect />
						<DatePicker.View view='day'>
							{(api) => (
								<>
									<DatePicker.ViewControl>
										<DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
										<DatePicker.ViewTrigger>
											<DatePicker.RangeText />
										</DatePicker.ViewTrigger>
										<DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
									</DatePicker.ViewControl>
									<DatePicker.Table>
										<DatePicker.TableHead>
											<DatePicker.TableRow>
												{api.weekDays.map((weekDay, id) => (
													<DatePicker.TableHeader key={id}>
														{weekDay.short}
													</DatePicker.TableHeader>
												))}
											</DatePicker.TableRow>
										</DatePicker.TableHead>
										<DatePicker.TableBody>
											{api.weeks.map((week, id) => (
												<DatePicker.TableRow key={id}>
													{week.map((day, id) => (
														<DatePicker.TableCell key={id} value={day}>
															<DatePicker.TableCellTrigger>
																{day.day}
															</DatePicker.TableCellTrigger>
														</DatePicker.TableCell>
													))}
												</DatePicker.TableRow>
											))}
										</DatePicker.TableBody>
									</DatePicker.Table>
								</>
							)}
						</DatePicker.View>
						<DatePicker.View view='month'>
							{(api) => (
								<>
									<DatePicker.ViewControl>
										<DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
										<DatePicker.ViewTrigger>
											<DatePicker.RangeText />
										</DatePicker.ViewTrigger>
										<DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
									</DatePicker.ViewControl>
									<DatePicker.Table>
										<DatePicker.TableBody>
											{api
												.getMonthsGrid({ columns: 4, format: "short" })
												.map((months, id) => (
													<DatePicker.TableRow key={id}>
														{months.map((month, id) => (
															<DatePicker.TableCell
																key={id}
																value={month.value}
															>
																<DatePicker.TableCellTrigger>
																	{month.label}
																</DatePicker.TableCellTrigger>
															</DatePicker.TableCell>
														))}
													</DatePicker.TableRow>
												))}
										</DatePicker.TableBody>
									</DatePicker.Table>
								</>
							)}
						</DatePicker.View>
						<DatePicker.View view='year'>
							{(api) => (
								<>
									<DatePicker.ViewControl>
										<DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
										<DatePicker.ViewTrigger>
											<DatePicker.RangeText />
										</DatePicker.ViewTrigger>
										<DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
									</DatePicker.ViewControl>
									<DatePicker.Table>
										<DatePicker.TableBody>
											{api.getYearsGrid({ columns: 4 }).map((years, id) => (
												<DatePicker.TableRow key={id}>
													{years.map((year, id) => (
														<DatePicker.TableCell
															key={id}
															value={year.value}
														>
															<DatePicker.TableCellTrigger>
																{year.label}
															</DatePicker.TableCellTrigger>
														</DatePicker.TableCell>
													))}
												</DatePicker.TableRow>
											))}
										</DatePicker.TableBody>
									</DatePicker.Table>
								</>
							)}
						</DatePicker.View>
					</DatePicker.Content>
				</DatePicker.Positioner>
			</Portal>
		</DatePicker.Root>
	);
};
