import { TeamController } from "../controller/teams-controller";

export const team: any= async (event, _context) => {
  let ctl = new TeamController();
  console.log(event);
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        score: 12 ,
        name: ctl.score ,
        players: ctl.score

      
      }, null, 2),
    };
  }
  