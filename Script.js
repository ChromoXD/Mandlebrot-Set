const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');

cvs.width = Math.min(window.innerWidth, window.innerHeight);
cvs.height = Math.min(window.innerWidth, window.innerHeight);

let Width = cvs.width;
let Height = cvs.height;

let img = ctx.createImageData(Width, Height);

window.addEventListener('resize',() => {    
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
})

function MBset(z, c, iteration) {
	
	for (let i = 0; i < iteration; i++)
	{
		let real = z[0] * z[0] - z[1] * z[1] + c[0];
		let img = 2 * z[1] * z[0] + c[1];

		z = [ real, img ];

		if (z[0]*z[0] + z[1]*z[1] > 4)
		{
			return i;
		}
		
	}
		return iteration;
}

for (let i = 0; i < Height; i++) {
    for (let o = 0; o < Width; o++) {

        let index = (i * Width + o)*4;

        img.data[index + 0] = MBset([0, 0], [((o-Width/2)/Width)*4, ((i-Height/2)/Height)*4], 15)*10;
        img.data[index + 1] = MBset([0, 0], [((o-Width/2)/Width)*4, ((i-Height/2)/Height)*4], 15)*10;
        img.data[index + 2] = MBset([0, 0], [((o-Width/2)/Width)*4, ((i-Height/2)/Height)*4], 15)*10;
        img.data[index + 3] = 255;
    }
}

ctx.putImageData(img, 0, 0);