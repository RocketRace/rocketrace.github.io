{
  description = "my site";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (sys:
    let
      pkgs = nixpkgs.legacyPackages.${sys};
      ruby = pkgs.ruby_3_4;
      gems = pkgs.bundlerEnv {
        name = "my site";
        inherit ruby;
        gemdir = ./.;
      };
    in {
      devShells.default = pkgs.mkShell {
        packages = [
          gems
          ruby
          pkgs.typescript
          (pkgs.writeScriptBin "watch" "${pkgs.typescript}/bin/tsc --watch")
          (pkgs.writeScriptBin "serve" "${gems}/bin/bundle exec jekyll serve")
        ];
      };
    }
  );
}