// Default Calendar View
frappe.views.calendar["Event"] = {
	field_map: {
		start: "starts_on",
		end: "ends_on",
		id: "name",
		allDay: "all_day",
		title: "subject",
		status: "event_type",
		color: "color",
	},

	style_map: {
		Public: "success",
		Private: "info",
	},
	filters: [
	{
		fieldtype: "Select",
		fieldname: "Event Type",
		options: "Public",
		label: __("Public"),
	},
	],
	options: {
		slotDuration: "00:10:00",
		slotLabelInterval: "00:30:00",
		displayEventEnd: true,
	},
	get_events_method: "frappe.desk.doctype.event.event.get_events",
};