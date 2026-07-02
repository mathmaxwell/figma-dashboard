import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SelectClassState {
	selectClassId: string
	selectClassName: string
	setSelectClass: (data: { id: string; name: string }) => void
}

export const useSelectClassStore = create<SelectClassState>()(
	persist(
		set => ({
			selectClassId: '',
			selectClassName: '',
			setSelectClass: ({ id, name }) =>
				set({ selectClassId: id, selectClassName: name }),
		}),
		{
			name: 'select-class',
		}
	)
)
