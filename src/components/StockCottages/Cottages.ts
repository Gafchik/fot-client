import Cottage0 from './images/cottage0pocket.png';
import Cottage1 from './images/cottage1pocket.png';
import Cottage2 from './images/cottage2pocket.png';
import Cottage3 from './images/cottage3pocket.png';
import Cottage4 from './images/cottage4pocket.png';
import Cottage5 from './images/cottage5pocket.png';
import Cottage6 from './images/cottage6pocket.png';
import Cottage7 from './images/cottage8pocket.png';
import Cottage8 from './images/cottage9pocket.png';
import Cottage9 from './images/cottage11pocket.png';
import Cottage10 from './images/cottage12pocket.png';
import Cottage11 from './images/cottage13pocket.png';
import Cottage12 from './images/cottage14pocket.png';
import Cottage13 from './images/cottage15pocket.png';
import Cottage14 from './images/cottage16.1pocket.png';
import Cottage15 from './images/cottage17pocket.png';
import Cottage16 from './images/cottage18pocket.png';
import Cottage17 from './images/cottage19pocket.png';
import Cottage18 from './images/cottage20pocket.png';
import Cottage22 from './images/cottage21pocket.png';
import Cottage23 from './images/cottage22pocket.png';
import Cottage24 from './images/cottage23pocket.png';
import Cottage25 from './images/cottage24pocket.png';
import Cottage26 from './images/cottage25pocket.png';
import Cottage27 from './images/cottage26pocket.png';
import Cottage28 from './images/cottage27pocket.png';
import Cottage29 from './images/cottage28pocket.png';
import Cottage30 from './images/cottage29pocket.png';
import Cottage31 from './images/cottage30pocket.png';
import Cottage32 from './images/cottage31pocket.png';
import Cottage33 from './images/cottage32pocket.png';
import Cottage34 from './images/cottage33pocket.png';
import Cottage35 from './images/cottage34pocket.png';
import Cottage36 from './images/cottage35pocket.png';
import Cottage37 from './images/cottage36pocket.png';
import Cottage38 from './images/cottage10pocket.png';

import Cottage19 from './images/Host-1.png';
import Cottage20 from './images/Host-2.png';
import Cottage21 from './images/Host-3.png';
import Hostel1Floor1 from './images/Host-3-floor-1.png';
import Hostel1Floor2 from './images/Host-3-floor-2.png';
import Hostel1Floor3 from './images/Host-3-floor-3.png';

import Hostel2Floor1 from './images/Host-2-floor-1.png';
import Hostel2Floor2 from './images/Host-2-floor-2.png';
import Hostel2Floor3 from './images/Host-2-floor-3.png';

import Hostel3Floor1 from './images/Host-1-floor-3.png';
import Hostel3Floor2 from './images/Host-1-floor-2.png';
import Hostel3Floor3 from './images/Host-1-floor-1.png';

class Flat {
    public isAvailable: boolean;

    constructor(isAvailable: boolean) {
        this.isAvailable = isAvailable;
    }
}

class Cottage {
    private id: number;
    private image: any;

    public index: number;
    public number: number;

    public isAvailable: boolean;
    public x: number;
    public y: number;
    public width: number;
    public additional_ru: string | null;
    public additional_en: string | null;

    public title_ru: string;
    public title_en: string;
    public flats: Array<Flat> | null;
    public flatsCount: number | null;

    public pocketOffsetX: number;
    public pocketOffsetY: number;

    constructor(id: number, number: number, index: number, pocketOffsetX: number, pocketOffsetY: number, title_ru: string | null, title_en: string | null, additional_ru: string | null, additional_en: string | null, flats: Array<Flat> | null, image: any, isAvailable: boolean, x: number, y: number, width: number) {
        this.id = id;
        this.image = image;
        this.isAvailable = isAvailable;

        this.x = x;
        this.y = y;
        this.width = width;

        this.number = number;
        this.index = index;

        this.title_ru = title_ru ? title_ru : "КОТТЕДЖ";
        this.title_en = title_en ? title_en : "COTTAGE";

        this.flats = flats;
        this.flatsCount = flats?.length || null;
        this.additional_ru = additional_ru;
        this.additional_en = additional_en;

        this.pocketOffsetX = pocketOffsetX;
        this.pocketOffsetY = pocketOffsetY;
    }

    GetTitle(language: string) {
        if (language === 'ru')
            return this.title_ru;
        else return this.title_en;
    }

    GetAdditional(language: string) {
        if (language === 'ru')
            return this.additional_ru;
        else return this.additional_en;
    }

    GetImage() {
        return this.image;
    }

    GetId() {
        return this.id;
    }
}

class CottagesManager {
    private cottages: Array<Cottage>;
    public count: number;

    constructor(cottages: Array<Cottage>) {
        this.cottages = cottages;
        this.count = cottages.length;
    }

    CottagesAvailable() {
        return this.cottages.filter(x => !x.isAvailable);
    }

    GetCottageById(id: number) {
        return this.cottages.find(x => x.GetId() === id);
    }

    GetCountOfAvailableFlats(id: number): number | undefined {
        if (this.cottages.find(x => x.GetId() === id)?.flats) {
            return this.cottages.find(x => x.GetId() === id)?.flats?.filter(x => x.isAvailable).length;
        }

        return undefined;
    }

    Resize(cords: number) {
        this.cottages.forEach(x => {
            x.x *= cords / 1500;
            x.y *= cords / 1500;
        })
    }
}

export const cottages: CottagesManager = new CottagesManager([
    new Cottage(0, 1, 18, 10, 1, null, null, null, null, null, Cottage18, false, 295 * 0.78125, 340 * 0.78125, 9),
    new Cottage(1, 2, 17, 15, 1, null, null, null, null, null, Cottage17, false, 163 * 0.78125, 371 * 0.78125, 11.1),
    new Cottage(2, 3, 16, 10, 1, null, null, null, null, null, Cottage16, true, 225 * 0.78125, 388 * 0.78125, 10),
    new Cottage(3, 4, 15, 20, 1, null, null, null, null, null, Cottage15, true, 89 * 0.78125, 424 * 0.78125, 12.6),
    new Cottage(4, 5, 14, -50, 5, null, null, null, null, null, Cottage14, true, 0 * 0.78125, 463 * 0.78125, 13.86),
    new Cottage(5, 6, 13, 9, -2, null, null, null, null, null, Cottage13, true, 400 * 0.78125, 394 * 0.78125, 10.34),
    new Cottage(6, 7, 12, 8, 1, null, null, null, null, null, Cottage12, true, 432 * 0.78125, 417 * 0.78125, 9.73),
    new Cottage(7, 8, 11, 10, 1, null, null, null, null, null, Cottage11, true, 283 * 0.78125, 448 * 0.78125, 12.4),
    new Cottage(8, 9, 10, 14, 5, null, null, null, null, null, Cottage10, true, 310 * 0.78125, 482 * 0.78125, 11.45),
    new Cottage(9, 10, 9, 18, 10, null, null, null, null, null, Cottage9, false, 110 * 0.78125, 523 * 0.78125, 15.35),
    new Cottage(10, 11, 10, 10, 1, null, null, null, null, null, Cottage38, true, 594 * 0.78125, 461 * 0.78125, 11.3),
    new Cottage(11, 12, 8, 10, 1, null, null, null, null, null, Cottage8, true, 635 * 0.78125, 498 * 0.78125, 10.76),
    new Cottage(12, 14, 7, 10, 1, null, null, null, null, null, Cottage7, true, 473 * 0.78125, 540 * 0.78125, 13.9),
    new Cottage(13, 15, 6, 22, 8, null, null, null, null, null, Cottage6, true, 470 * 0.78125, 580 * 0.78125, 15.42),
    new Cottage(14, 16, 5, 15, 1, null, null, null, null, null, Cottage5, false, 822 * 0.78125, 544 * 0.78125, 11.2),
    new Cottage(15, 17, 4, 15, 5, null, null, null, null, null, Cottage4, false, 775 * 0.78125, 628 * 0.78125, 13.7),
    new Cottage(16, 18, 3, 15, 8, null, null, null, null, null, Cottage3, false, 918 * 0.78125, 645 * 0.78125, 12.44),
    new Cottage(17, 19, 2, 20, 15, null, null, null, null, null, Cottage2, false, 912 * 0.78125, 747 * 0.78125, 13.36),
    new Cottage(18, 20, 1, 14, 15, null, null, null, null, null, Cottage1, false, 1107 * 0.78125, 725 * 0.78125, 12.13),
    new Cottage(19, 21, 0, 13, 15, null, null, null, null, null, Cottage0, false, 1264 * 0.78125, 746 * 0.78125, 11.43),
    new Cottage(20, 22, 34, -8, -5, null, null, null, null, null, Cottage22, false, 640 * 0.78125, 262 * 0.78125, 3.4),
    new Cottage(21, 23, 33, -2, -5, null, null, null, null, null, Cottage23, true, 667 * 0.78125, 269 * 0.78125, 3.5),
    new Cottage(22, 24, 32, 1, -5, null, null, null, null, null, Cottage24, true, 708 * 0.78125, 284 * 0.78125, 3),
    new Cottage(23, 25, 27, 1, -5, null, null, null, null, null, Cottage25, true, 744 * 0.78125, 290 * 0.78125, 3),
    new Cottage(24, 26, 25, 1, -5, null, null, null, null, null, Cottage26, true, 782 * 0.78125, 297 * 0.78125, 2.2),
    new Cottage(25, 27, 26, 5, -2, null, null, null, null, null, Cottage27, true, 811 * 0.78125, 300 * 0.78125, 2.6),
    new Cottage(26, 28, 27, 2, -3, null, null, null, null, null, Cottage28, true, 875 * 0.78125, 311 * 0.78125, 2.7),
    new Cottage(27, 29, 28, 2, -3, null, null, null, null, null, Cottage29, true, 915 * 0.78125, 323 * 0.78125, 2.5),
    new Cottage(28, 30, 29, 2, -3, null, null, null, null, null, Cottage30, true, 960 * 0.78125, 327 * 0.78125, 2.2),
    new Cottage(29, 31, 30, 8, -3, null, null, null, null, null, Cottage31, true, 999 * 0.78125, 336 * 0.78125, 2.55),
    new Cottage(30, 32, 31, 8, -3, null, null, null, null, null, Cottage32, true, 1059 * 0.78125, 345 * 0.78125, 3.53),
    new Cottage(31, 33, 32, 8, -3, null, null, null, null, null, Cottage33, true, 1117 * 0.78125, 357 * 0.78125, 3.26),
    new Cottage(32, 34, 33, 8, -3, null, null, null, null, null, Cottage34, true, 1170 * 0.78125, 370 * 0.78125, 3.7),
    new Cottage(33, 35, 34, 8, -3, null, null, null, null, null, Cottage35, true, 1226 * 0.78125, 385 * 0.78125, 3.94),
    new Cottage(34, 37, 35, 8, 1, null, null, null, null, null, Cottage36, true, 1321 * 0.78125, 421 * 0.78125, 6.58),
    new Cottage(35, 38, 36, 1, 1, null, null, null, null, null, Cottage37, true, 1416 * 0.78125, 438 * 0.78125, 5.62),
    new Cottage(36, 39, 37, 5, -5, "ХОСТЕЛ", "HOSTEL", "ЭТАЖ 3", "FLOOR 3", new Array<Flat>(new Flat(true), new Flat(true), new Flat(true), new Flat(true)), Hostel3Floor1, true, 607 * 0.78125, 305 * 0.78125, 11.07),
    new Cottage(37, 39, 38, 4, -1, "ХОСТЕЛ", "HOSTEL", "ЭТАЖ 2", "FLOOR 2", new Array<Flat>(new Flat(true), new Flat(true), new Flat(true), new Flat(true)), Hostel3Floor2, false, 609 * 0.78125, 335 * 0.78125, 11.16),
    new Cottage(38, 39, 39, 4, 5, "ХОСТЕЛ", "HOSTEL", "ЭТАЖ 1", "FLOOR 1", new Array<Flat>(new Flat(true), new Flat(true), new Flat(true), new Flat(true)), Hostel3Floor3, false, 611 * 0.78125, 365 * 0.78125, 10.8),
    new Cottage(39, 40, 37, 9, -3, "ХОСТЕЛ", "HOSTEL", "ЭТАЖ 3", "FLOOR 3", new Array<Flat>(new Flat(true), new Flat(true), new Flat(true), new Flat(true)), Hostel2Floor3, false, 801 * 0.78125, 364 * 0.78125, 12.17),
    new Cottage(40, 40, 38, 8, 1, "ХОСТЕЛ", "HOSTEL", "ЭТАЖ 2", "FLOOR 2", new Array<Flat>(new Flat(true), new Flat(true), new Flat(true), new Flat(true)), Hostel2Floor2, true, 804 * 0.78125, 399 * 0.78125, 12.05),
    new Cottage(41, 40, 39, 8, 5, "ХОСТЕЛ", "HOSTEL", "ЭТАЖ 1", "FLOOR 1", new Array<Flat>(new Flat(true), new Flat(true), new Flat(true), new Flat(true)), Hostel2Floor1, false, 804 * 0.78125, 430 * 0.78125, 11.98),
    new Cottage(42, 41, 36, 12, -3, "ХОСТЕЛ", "HOSTEL", "ЭТАЖ 3", "FLOOR 3", new Array<Flat>(new Flat(true), new Flat(true), new Flat(true), new Flat(true)), Hostel1Floor3, true, 1127 * 0.78125, 499 * 0.78125, 12.435),
    new Cottage(43, 41, 35, 10, 1, "ХОСТЕЛ", "HOSTEL", "ЭТАЖ 2", "FLOOR 2", new Array<Flat>(new Flat(true), new Flat(true), new Flat(true), new Flat(true)), Hostel1Floor2, false, 1134 * 0.78125, 545 * 0.78125, 11.53),
    new Cottage(44, 41, 34, 11, 2, "ХОСТЕЛ", "HOSTEL", "ЭТАЖ 1", "FLOOR 1", new Array<Flat>(new Flat(true), new Flat(true), new Flat(true), new Flat(true)), Hostel1Floor1, false, 1131 * 0.78125, 591 * 0.78125, 11.6),
    // new Cottage(18, 19, 18, "ХОСТЕЛ", Cottage19, false, 604 * 0.78125, 295 * 0.78125, 11.44),
    // new Cottage(19, 20, 19, "ХОСТЕЛ", Cottage20, false, 799 * 0.78125, 345 * 0.78125, 12.35),
    // new Cottage(20, 21, 20, "ХОСТЕЛ", Cottage21, false, 1124 * 0.78125, 425 * 0.78125, 12.61),
])