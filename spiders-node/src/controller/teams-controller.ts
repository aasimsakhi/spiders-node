import { Teamservice } from "../teams-service/teams-service";

export class TeamController {
   ser = new Teamservice();
   name = this.ser.teams;
   score =this.ser.players;
   
}