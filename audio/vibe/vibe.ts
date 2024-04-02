namespace $ {

	export type $mol_audio_vibe_shape =
	| 'sine' 
	| 'square' 
	| 'sawtooth' 
	| 'triangle' 
	| 'custom'

	/**
	 * @see https://mol.hyoo.ru/#!section=demos/demo=mol_audio_demo_vibe
	 */
	export class $mol_audio_vibe extends $mol_audio_instrument {
		
		@ $mol_mem
		override node_raw(reset?: null) {
			this.active()
			return this.context().createOscillator()
		}

		@ $mol_mem
		freq( next = 440 ) { return next }

		@ $mol_mem
		shape( next: $mol_audio_vibe_shape = 'sine' ) { return next }

		override duration() {
			return 0.5
		}

		@ $mol_mem
		protected node_start() {
			super.node_start()

			return new this.$.$mol_after_timeout(
				this.duration() * 1000,
				() => $mol_wire_async(this).active(false)
			)
		}

		@ $mol_mem
		override node() {
			const node = super.node()
			node.frequency.setValueAtTime( this.freq(), this.time() )
			node.type = this.shape()

			return node
		}

	}
}
