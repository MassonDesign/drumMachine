function Pads({ drumPads, displayed }) {
	return (
		<div className='grid grid-cols-3'>
			{drumPads.map(({ keyId, keyName, id, url }) => (
				<div
					key={keyId}
					id={id}
					className='drum-pad p-2 bg-purple-500 m-2 rounded-md text-center cursor-pointer w-24'
					onClick={(e) => displayed(e, id, url)}
				>
					<audio src={url} className='clip' id={id} />
					<p className='font-semibold text-xl text-white'>{keyName}</p>
				</div>
			))}
		</div>
	);
}

export default Pads;
