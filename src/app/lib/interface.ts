export interface imagetype {
    _id: string;
    name: string;
    image: {
      _id: string;
      url: string;
      metadata: {
        dimensions: {
          aspectRatio: number;
          height: number;
          _type: string;
          width: number;
        };
        _type: string;
      };
    };
  }
  
  export interface rateType {
    _id: string;
    rates: {
      duration: string;
      price: string;
      edits: string;
      looks: string;
      locations: string;
      _key: string;
    }[];
    extras: string[];
  }