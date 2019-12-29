export const players: any=  (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'tigers players are so good',
        name:' majjid',
        score:100,
        input: event,
      }, null, 2),
    };
  }