type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
	let returnObjetec = {
		all: false,
		dog: false,
		cat: false,
		fish: false,
	};
	if (activeMenu !== '') {
		returnObjetec[activeMenu] = true;
	}

	return returnObjetec;
};
