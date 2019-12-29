export const test: any=  (event, _context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'lions team played well',
        name:'zubair',
        score:100,
        input: event,
      }, null, 2),
    };
  }