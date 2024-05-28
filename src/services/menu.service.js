import { menu } from '../data/data.js';

class MenuService {
    getAppetizers() {
        return menu.appetizers;
    }

    getEntrees() {
        return menu.entrees;
    }

    getSandwiches({ temp }) {
        return menu.sandwiches.filter((sandwich) => sandwich.temp === temp);
    }

    getSoupsAndSalads() {
        return menu.soupsAndSalads;
    }

    getFajitas() {
        return menu.fajitas;
    }

    getTacos() {
        return menu.tacos;
    }

    getEnchiladas() {
        return menu.enchiladas;
    }

    getQuiches() {
        return menu.quiches;
    }

    getGreenSalads() {
        return menu.greenSalads;
    }
}

export default new MenuService();

