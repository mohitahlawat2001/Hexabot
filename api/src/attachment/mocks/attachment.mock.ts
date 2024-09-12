/*
 * Copyright © 2024 Hexastack. All rights reserved.
 *
 * Licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:
 * 1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
 * 2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).
 * 3. SaaS Restriction: This software, or any derivative of it, may not be used to offer a competing product or service (SaaS) without prior written consent from Hexastack. Offering the software as a service or using it in a commercial cloud environment without express permission is strictly prohibited.
 */

import { Stream } from 'node:stream';

import { Attachment } from '../schemas/attachment.schema';

export const attachment: Attachment = {
  name: 'Screenshot from 2022-03-11 08-41-27-2a9799a8b6109c88fd9a7a690c1101934c.png',
  type: 'image/png',
  size: 343370,
  location:
    '/Screenshot from 2022-03-11 08-41-27-2a9799a8b6109c88fd9a7a690c1101934c.png',
  id: '65940d115178607da65c82b6',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const attachmentFile: Express.Multer.File = {
  filename: attachment.name,
  mimetype: attachment.type,
  size: attachment.size,
  buffer: Buffer.from(new Uint8Array([])),
  destination: '',
  fieldname: '',
  originalname: '',
  path: '',
  stream: new Stream.Readable(),
  encoding: '7bit',
};

export const attachments: Attachment[] = [
  attachment,
  {
    name: 'Screenshot from 2022-03-11 08-41-27-2a9799a8b6109c88fd9a7a690c1101934c.png',
    type: 'image/png',
    size: 343370,
    location:
      '/app/src/attachment/uploads/Screenshot from 2022-03-11 08-41-27-2a9799a8b6109c88fd9a7a690c1101934c.png',
    channel: { dimelo: {} },
    id: '65940d115178607da65c82b7',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Screenshot from 2022-03-18 08-58-15-af61e7f71281f9fd3f1ad7ad10107741c.png',
    type: 'image/png',
    size: 33829,
    location:
      '/app/src/attachment/uploads/Screenshot from 2022-03-18 08-58-15-af61e7f71281f9fd3f1ad7ad10107741c.png',
    channel: { dimelo: {} },
    id: '65940d115178607da65c82b8',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];