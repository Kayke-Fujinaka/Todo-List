import * as S from "./styles";

interface HeadingProps {
  title?: string;
}

export default function Header({ title }: HeadingProps) {
  return (
    <S.Header>
      <S.Title>
        to.<span>do</span>
      </S.Title>
    </S.Header>
  );
}
