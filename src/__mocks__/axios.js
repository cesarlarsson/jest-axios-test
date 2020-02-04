export default {
	create:jest.fn(()=>{}),
	get: jest.fn(()=>{
		return Promise.resolve({data:{}})
	}),
	interceptors:{
		request:{
			use:jest.fn(),
			eject:jest.fn()
		},
		response:{
			use:jest.fn(),
			eject:jest.fn()
		}

	}
}