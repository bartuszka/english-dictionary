/* eslint no-undef: off */
/* eslint @typescript-eslint/no-var-requires: off */
import { NextFunction, Request, Response } from 'express';
import express from 'express';

import { words } from '../data/words';
import { Word } from '../models/words/general-word';
import errors from '../data/errors';
import { ErrorName } from '../models/error/error-name';
import { ListWord } from '../models/words/list-word';

const wordsRouter = express.Router();

wordsRouter.get('/api/word-list', (req: Request, res: Response) => {
  const wordList: ListWord[] = words.map((word: Word) => ({ id: word.id, name: word.name, wordType: word.wordType }));
  res.json(wordList);
});

wordsRouter.get('/api/words', (req: Request, res: Response) => {
  // res.status(500).send();
  res.json(words);
});

wordsRouter.post('/api/add-word', (req: Request, res: Response, next: NextFunction) => {
  const existingWord: Word = words.find((word: Word) => word.id === req.body.id) as Word;

  if (existingWord) {
    next(errors.get(ErrorName.EXISTING_WORD));
  } else {
    const copiedBody: Word = { ...req.body };
    words.push(copiedBody);
    res.json(copiedBody);
  }
});

wordsRouter.put('/api/edit-word', (req: Request, res: Response, next: NextFunction) => {
  const existingWordIndex: number = words.findIndex((word: Word) => word.id === req.body.id);

  if (existingWordIndex === -1) {
    next(errors.get(ErrorName.NOT_EXISTING_WORD));
  } else {
    const copiedBody: Word = { ...req.body };
    words[existingWordIndex] = copiedBody;
    res.json(copiedBody);
  }
});

export default wordsRouter;
