namespace $ {
	const method_regex = /[^\w\d_]/

	export function $mol_view_tree_ts_quote(prop: $mol_tree2) {
		const need_quote = method_regex.test(prop.value)
		if (! need_quote) return prop

		const escaped = $mol_view_tree_ts_escape(prop)

		const quote_node = prop.data($mol_view_tree_ts_escape_quote)
	
		return prop.struct('inline', [
			quote_node,
			escaped,
			quote_node,
		])
	}
}
