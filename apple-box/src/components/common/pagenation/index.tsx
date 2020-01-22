import React, { FC } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./style";
import { makePagenationArray } from "./presenter";

interface OwnProps {
  lastPage: number;
  isPostSave: boolean;
  noticePath: string;
}

const Pagenation: FC<OwnProps> = ({ lastPage, isPostSave, noticePath }) => {
  const { search } = useLocation();
  const pageNum = search.split("=")[1];
  const pagenationArray = makePagenationArray({
    pageLength: lastPage,
    pageNum: Number(pageNum)
  });

  return (
    <S.Wrapper>
      {isPostSave &&
        pageNum &&
        pagenationArray.map(({ isFirst, isMiddle, isLast, icon, pagePath }) => (
          <S.PageLink
            key={`${pagePath}_${icon}`}
            isactive={Number(pageNum) === pagePath ? "true" : "false"}
            to={`${noticePath}?page=${pagePath}`}
          >
            {isFirst ? icon : isMiddle ? pagePath : isLast && icon}
          </S.PageLink>
        ))}
    </S.Wrapper>
  );
};

export default Pagenation;
