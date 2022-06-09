/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactNode } from 'react';
import { useAnalytics } from '@backstage/core-plugin-api';
import {
  ResultHighlight,
  SearchDocument,
} from '@backstage/plugin-search-common';
import { HighlightedSearchResultText } from '@backstage/plugin-search-react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
} from '@material-ui/core';
import { Link } from '@backstage/core-components';

type Props = {
  icon?: ReactNode;
  secondaryAction?: ReactNode;
  result: SearchDocument;
  highlight?: ResultHighlight;
  rank?: number;
  lineClamp?: number;
};

export const DefaultResultListItem = ({
  result,
  highlight,
  rank,
  icon,
  secondaryAction,
  lineClamp = 5,
}: Props) => {
  const analytics = useAnalytics();
  const handleClick = () => {
    analytics.captureEvent('discover', result.title, {
      attributes: { to: result.location },
      value: rank,
    });
  };

  return (
    <Link noTrack to={result.location} onClick={handleClick}>
      <ListItem alignItems="center">
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText
          primaryTypographyProps={{ variant: 'h6' }}
          primary={
            highlight?.fields.title ? (
              <HighlightedSearchResultText
                text={highlight.fields.title}
                preTag={highlight.preTag}
                postTag={highlight.postTag}
              />
            ) : (
              result.title
            )
          }
          secondary={
            <span
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: lineClamp,
                overflow: 'hidden',
              }}
            >
              {highlight?.fields.text ? (
                <HighlightedSearchResultText
                  text={highlight.fields.text}
                  preTag={highlight.preTag}
                  postTag={highlight.postTag}
                />
              ) : (
                result.text
              )}
            </span>
          }
        />
        {secondaryAction && <Box alignItems="flex-end">{secondaryAction}</Box>}
      </ListItem>
      <Divider />
    </Link>
  );
};
