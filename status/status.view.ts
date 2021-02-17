namespace $.$$ {
	
	export class $mol_status extends $.$mol_status {
		
		message() {
			try {
				return this.status() ?? null
			} catch( error ) {
				if( error instanceof Promise ) $mol_fail_hidden( error )
				return error.message
			}
		}
		
	}
	
}
