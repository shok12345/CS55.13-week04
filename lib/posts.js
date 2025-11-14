import got from 'got';

const dataURL = 'https://dev-cs55-13-shokatsuki.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/1';

/**
 * Get all post IDs for dynamic routing.
 */
export async function getAllPostIds() {
  try {
    const response = await got(dataURL);
    const posts = JSON.parse(response.body);

    return posts.map(post => ({
      params: { id: post.ID.toString() }
    }));
  } catch (error) {
    console.error('Error fetching post IDs:', error);
    return [];
  }
}

/**
 * Get all posts sorted by title.
 */
export async function getSortedPostsData() {
  try {
    const response = await got(dataURL);
    const posts = JSON.parse(response.body);

    // Sort by post_title
    posts.sort((a, b) => a.post_title.localeCompare(b.post_title));

    // Map to only needed fields
    return posts.map(post => ({
      id: post.ID.toString(),
      name: post.post_title
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

/**
 * Get a single post by ID.
 */
export async function getPostData(idRequested) {
  try {
    const response = await got(dataURL);
    const posts = JSON.parse(response.body);

    const post = posts.find(p => p.ID.toString() === idRequested);

    if (!post) return {};

    return {
      id: post.ID.toString(),
      title: post.post_title,
      contentHtml: post.post_content,
      date: post.post_date,
      author: post.post_author
    };
  } catch (error) {
    console.error(`Error fetching post ${idRequested}:`, error);
    return {};
  }
}



/*
//import { remark } from 'remark';
//import html from 'remark-html';
//import fs from 'fs';
//import path from 'path';
//import matter from 'gray-matter';

import got from 'got';

const dataURL = 'https://dev-cs55-13-shokatsuki.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/1';

 
//const postsDirectory = path.join(process.cwd(), 'posts');

export async function getAllPostIds() {
  // get filepath to json file
  // const filePath = path.join(dataDir, 'persons.json');
  // const jsonString = fs.readFileSync(filePath, 'utf8');
  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }

  // convert string from file into json array object
  // const jsonObj = JSON.parse(jsonString);
  const jsonObj = JSON.parse(jsonString.body);

  // use map() on array to extract just id properties into new array of obj values
  return jsonObj.map(item => {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  });
  // above code returns an array with nested obj values that looks like this:
  // [
  //   {
  //     params: {
  //       id: 3
  //     }
  //   },
  //   {
  //     params: {
  //       id: 2
  //     }
  //   }
  // ]
}

// function returns names and ids for all json objects in array, sorted by name property
export async function getSortedPostsData() {
  // get filepath to json file
  // const filePath = path.join(dataDir, 'persons.json');

  // load json file contents
  // const jsonString = fs.readFileSync(filePath, 'utf8');
  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }
  
  // convert string from file into json array object
  // const jsonObj = JSON.parse(jsonString);
  const jsonObj = JSON.parse(jsonString.body);

  // sort json array by name property
  jsonObj.sort(function (a, b) {
      return a.post_title.localeCompare(b.post_title);
  });

  // use map() on array to extract just id + name properties into new array of obj values
  return jsonObj.map(item => {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}

export async function getPostData(idRequested) {
  
  // get filepath to json file
  // const filePath = path.join(dataDir, 'persons.json');

  // load json file contents
  // const jsonString = fs.readFileSync(filePath, 'utf8');
  let jsonString;
  try {
    // next line uses got synchronously to retrive via https our json data from wp site
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch(error) {
    jsonString.body = [];
    console.log(error);
  }

  // convert string from file into json array object
  // const jsonObj = JSON.parse(jsonString);
  const jsonObj = JSON.parse(jsonString.body);

  // find object value in array that has matching id
  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });

  // extract object value in filtered array if any
  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }
// console.log(objReturned);

  // return object value found
  return objReturned;
}
*/
