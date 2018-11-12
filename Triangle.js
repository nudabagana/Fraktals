class Triangle {
	constructor(step, color1, color2, color3, color4) {
		this.step = step;
		this.color1 = color1;
		this.color2 = color2;
		this.color3 = color3;
		this.color4 = color4;
		this.animate = this.animate0;
		this.animationStart = new Date();
		this.timePassed = 0;
	}
	draw(ctx) {
		// border
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(500, 0);
		ctx.lineTo(500, 500);
		ctx.lineTo(0, 500);
		ctx.closePath();
		ctx.stroke();
		ctx.save();
		ctx.save();
		this.animate(ctx);
		this.drawRecursive(this.step, ctx);
		ctx.restore();
	}

	drawRecursive(step, ctx, color) {
		if (step > 0) {
			step = step - 1;

			ctx.save();
			// ctx.transform(0.5, 0, 0, 0.5, 250, 0);
			ctx.transform(0, 0.5, 0.5, 0, 250, 0);
			if (this.step == (step+1))
			{
				this.drawRecursive(step, ctx, this.color1);
			}
			else
			{
				this.drawRecursive(step, ctx, color);
			}
			
			ctx.restore();
			ctx.save();
			// ctx.transform(0, 0.5, 0.5, 0, 250, 250);
			ctx.transform(0.5, 0, 0, 0.5, 250, 250);
			if (this.step == (step+1))
			{
				this.drawRecursive(step, ctx, this.color2);
			}
			else
			{
				this.drawRecursive(step, ctx, color);
			}
			ctx.restore();
			ctx.save();
			// ctx.transform(0, 0.5, -0.5, 0, 250, 250);
			ctx.transform(-0.5, 0, 0, 0.5, 250, 250);
			if (this.step == (step+1))
			{
				this.drawRecursive(step, ctx, this.color3);
			}
			else
			{
				this.drawRecursive(step, ctx, color);
			}
			ctx.restore();
			ctx.save();
			//ctx.transform(0.25, 0, 0, -0.25, 125, 250);
			ctx.transform(0, -0.25, 0.25, 0, 125, 250);
			if (this.step == (step+1))
			{
				this.drawRecursive(step, ctx, this.color4);
			}
			else
			{
				this.drawRecursive(step, ctx, color);
			}
			ctx.restore();
		} else {
			this.drawFigure(ctx, color);
		}
	}

	drawFigure(ctx, color) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(0, 250);
		ctx.lineTo(250, 250);
		ctx.lineTo(250,0);
		ctx.lineTo(500, 0);
		ctx.lineTo(500, 500);
		ctx.lineTo(0, 500);
		ctx.fill();
	}

	animate(ctx)
	{
		
	}
	animate0(ctx)
	{
		this.timePassed = new Date() - this.animationStart;
		if ( this.timePassed >= 2000)
		{
			// reset animation
			this.animationStart = new Date();
			this.timePassed = 0;
		}
		else if ( this.timePassed > 1000)
		{
			this.timePassed = 1000;
		}
		this.timePassed = this.timePassed/ 1000;
	}
	animate1(ctx)
	{
		this.animate0();
		let xx = 1 - (1 *this.timePassed);
		let xy = 0 + (0.5*this.timePassed);
		let yx = 0 + (0.5*this.timePassed);
		let yy = 1 - (1 *this.timePassed);
		let x = 0 + (250*this.timePassed);
		let y = 0 + (0 * this.timePassed);
		//ctx.transform(0, 0.5, 0.5, 0, 250, 0);
		//ctx.transform(1, 0, 0, 1, 0, 0);
		ctx.transform(xx, xy, yx, yy, x, y);
	}
	animate2(ctx)
	{
		this.animate0();
		let xx = 1 - (0.5 *this.timePassed);
		let xy = 0 + (0*this.timePassed);
		let yx = 0 + (0*this.timePassed);
		let yy = 1 - (0.5 *this.timePassed);
		let x = 0 + (250*this.timePassed);
		let y = 0 + (250 * this.timePassed);
		//ctx.transform(0.5, 0, 0, 0.5, 250, 250);
		//ctx.transform(1, 0, 0, 1, 0, 0);
		ctx.transform(xx, xy, yx, yy, x, y);
		
	}
	animate3(ctx)
	{
		this.animate0();
		let xx = 1 - (1.5 *this.timePassed);
		let xy = 0 + (0*this.timePassed);
		let yx = 0 + (0*this.timePassed);
		let yy = 1 - (0.5 *this.timePassed);
		let x = 0 + (250*this.timePassed);
		let y = 0 + (250 * this.timePassed);
		//ctx.transform(-0.5, 0, 0, 0.5, 250, 250);
		//ctx.transform(1, 0, 0, 1, 0, 0);
		ctx.transform(xx, xy, yx, yy, x, y);
	}
	animate4(ctx)
	{
		this.animate0();
		let xx = 1 - (1 *this.timePassed);
		let xy = 0 - (0.25*this.timePassed);
		let yx = 0 + (0.25*this.timePassed);
		let yy = 1 - (1 *this.timePassed);
		let x = 0 + (125*this.timePassed);
		let y = 0 + (250 * this.timePassed);
		//ctx.transform(0, -0.25, 0.25, 0, 125, 250);
		//ctx.transform(1, 0, 0, 1, 0, 0);
		ctx.transform(xx, xy, yx, yy, x, y);
	}
	chooseAnimation(nr)
	{
		if (nr == 1)
		{
			this.animate = this.animate1;
		}
		else if (nr ==2)
		{
			this.animate = this.animate2;
		}
		else if (nr ==3)
		{
			this.animate = this.animate3;
		}
		else if (nr ==4)
		{
			this.animate = this.animate4;
		}
		else
		{
			this.animate = this.animate0;
		}
	}
}
