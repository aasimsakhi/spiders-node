export const match: any= async (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
        name:'Asim',
        input: event,
      }, null, 2),
    };
  }
  