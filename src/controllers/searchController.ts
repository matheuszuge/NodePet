import { Request, Response } from 'express';
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObjects';
import { queryObjects } from 'v8';

export const search = (req: Request, res: Response) => {
	let query: string = req.query.q as string;
	let list = Pet.getFromName(query);

	if (!query) {
		res.redirect('/');
		return;
	}

	res.render('pages/page', {
		menu: createMenuObject(''),
		list,
		query,
	});
};
