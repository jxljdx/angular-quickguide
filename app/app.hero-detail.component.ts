import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component ({
    selector: "my-hero-detail",
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
    </div>
    `
})
export class HeroDetailComponent {
    // the value of |hero| is going to be from AppComponent, since it is input
    // from another Component, we use @Input decorator here
    @Input()
    hero: Hero;
}